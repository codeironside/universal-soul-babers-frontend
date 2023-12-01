import axios from 'axios';
import { useImage } from '../context/ImageContext';
import { getCookie } from '../utils';

export default function UpdateImage({ onImageLoaded }) {
  const {setImageUrl} = useImage()
  const cloudName = 'di36rc30e';
  const uploadPreset = 'mrh3qf9';

  const token = getCookie('token');

  async function handleFile(e) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

  //   axios
  //     .post(
  //       `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
  //       formData
  //     )
  //     .then((res) => {
  //       setImageUrl(res.data.secure_url)
  //     })
  //     .catch((err) => console.error(err));
  // }

   try {
    const response = axios.post(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, formData)

    const imageId = response.data.public_id;

    await axios.put(``, {image_url:imageId}, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })

    setImageUrl(response.data.secure_url)

    
   } catch (error) {
    console.error('Error updating image: ',);
    
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
      />
    </form>
  );
}
