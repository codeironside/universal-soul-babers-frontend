import axios from 'axios';

export default function UpdateImage({ onImageLoaded }) {
  const cloudName = 'di36rc30e';
  const uploadPreset = 'mrh3qf9';

  function handleFile(e) {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    axios
      .post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      )
      .then((res) => {
        onImageLoaded(res.data.secure_url);
      })
      .catch((err) => console.error(err));
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
