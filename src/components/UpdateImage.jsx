import axios from 'axios';
import { useImage } from '../context/ImageContext';
import { getCookie, setCookie } from '../utils';

export default function UpdateImage() {
  const { setImageUrl } = useImage();
  const cloudName = 'di36rc30e';
  const uploadPreset = 'mrh3qf9';

  const token = getCookie('token');
  const user = JSON.parse(getCookie('user'));

  async function handleFile(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);


    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );

      const imageId = response.data.public_id;
      const imageRes = response.data.secure_url;

      const userId = user._id;

      await axios
        .put(
          `https://unique-barbers.onrender.com/api/v1/users/update/${userId}`,
          { pictureUrl: imageRes },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

      setCookie('user', JSON.stringify({ ...user, pictureUrl: imageId }));

      setImageUrl(response.data.secure_url);
    } catch (error) {
      console.error('Error updating image:', error);
    }
  }

  return (
    <form>
      <label
        htmlFor="fileInput"
        className="font-medium bg-white rounded-md text-primaryDark hover:text-primaryDark focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2"
      >
        Update
      </label>
      <input
        type="file"
        id="fileInput"
        className="hidden"
        onChange={handleFile}
        accept="image/jpg, image/jpeg, image/png"
      />
    </form>
  );
}
