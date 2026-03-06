import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../services/api";
import Navigation from "../components/Navigation";
import ProfileHeader from "../components/ProfileHeader";
import CareerVision from "../components/CareerVision";
import LevelUpProfile from "../components/LevelUpProfile";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Certification from "../components/Certification";
import Skills from "../components/Skills";
import EditBioModal from "../components/EditBioModal";
import AddEducationModal from "../components/AddEducationModal";
import AddSkillsModal from "../components/AddSkillsModal";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [showEditBioModal, setShowEditBioModal] = useState(false);
  const [showAddEducationModal, setShowAddEducationModal] = useState(false);
  const [showAddSkillsModal, setShowAddSkillsModal] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    const res = await getProfile();
    setProfile(res.data);
  };

  const handleSaveBio = async (updatedProfile) => {
    await updateProfile(updatedProfile);
    setShowEditBioModal(false);
    fetchProfile();
  };

  const handleSaveEducation = async (educationData) => {
    const updatedProfile = {
      ...profile,
      education: [...(profile.education || []), educationData]
    };
    await updateProfile(updatedProfile);
    setShowAddEducationModal(false);
    fetchProfile();
  };

  const handleAddSkills = async (newSkills) => {
    const newSkillObjects = newSkills.map(skillName => ({
      name: skillName,
      endorsements: 0
    }));
    
    const updatedProfile = {
      ...profile,
      skills: [...profile.skills, ...newSkillObjects]
    };
    await updateProfile(updatedProfile);
    setShowAddSkillsModal(false);
    fetchProfile();
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navigation />
      <div className="max-w-6xl mx-auto p-8 space-y-6">
        <ProfileHeader 
          profile={profile}
          onEditProfile={() => setShowEditBioModal(true)}
        />
        <CareerVision profile={profile} />

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1">
            <LevelUpProfile 
              profile={profile} 
              onCompleteBio={() => setShowEditBioModal(true)}
              onAddEducation={() => setShowAddEducationModal(true)}
              onUploadResume={() => setShowEditBioModal(true)}
            />
            <Skills 
              profile={profile} 
              refresh={fetchProfile}
              onAddSkills={() => setShowAddSkillsModal(true)}
            />
          </div>
          <div className="col-span-2 space-y-6">
            <Experience profile={profile} />
            <Education 
              education={profile.education}
              onAddEducation={() => setShowAddEducationModal(true)}
            />
            <Certification />
          </div>
        </div>
      </div>

      {showEditBioModal && (
        <EditBioModal
          profile={profile}
          onClose={() => setShowEditBioModal(false)}
          onSave={handleSaveBio}
        />
      )}

      {showAddEducationModal && (
        <AddEducationModal
          onClose={() => setShowAddEducationModal(false)}
          onSave={handleSaveEducation}
        />
      )}

      {showAddSkillsModal && (
        <AddSkillsModal
          existingSkills={profile.skills}
          onClose={() => setShowAddSkillsModal(false)}
          onSave={handleAddSkills}
        />
      )}
    </div>
  );
}
