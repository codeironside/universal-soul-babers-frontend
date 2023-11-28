import { useEffect, useRef } from 'react';

export default function UploadWidget() {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'di36rc30e',
        uploadPreset: 'mrh3qf9',
      },
      function (error, result) {
        console.log(result);
      }
    );
  }, []);

  return (
    <button
    type="button"
    className="font-medium bg-white rounded-md text-primaryDark hover:text-primaryDark focus:outline-none focus:ring-2 focus:ring-primaryDark focus:ring-offset-2" onClick={() => widgetRef.current.open()}
  >
    Update
  </button>
  )
}
