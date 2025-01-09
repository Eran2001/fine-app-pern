import { useState } from 'react';

const Profile = ({ avatar, setAvatar }) => {
  const [newAvatar, setNewAvatar] = useState(null);

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Update avatar when the user selects a new file
  const handleAvatarUpdate = () => {
    if (newAvatar) {
      setAvatar(newAvatar); // Update the avatar in the parent state
    }
  };

  return (
    <div>
      <div>
        <h3>Avatar</h3>
        {newAvatar ? (
          <img src={newAvatar} alt="Profile Avatar" width="100" height="100" />
        ) : (
          <p>No avatar selected</p>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />
        <button onClick={handleAvatarUpdate}>Update Avatar</button>
      </div>
    </div>
  );
};

export default Profile;
