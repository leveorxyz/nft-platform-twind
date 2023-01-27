import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const CreateCollection = () => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div>
      <div className="flex flex-col gap-y-6">
        <div>
          <label className="font-display text-brand-700 mb-2 block dark:text-white">
            Image, Video, Audio, or 3D Model
            <span className="text-red">*</span>
          </label>
          <div
            {...getRootProps()}
            className="dark:bg-brand-700 dark:border-brand-600 border-brand-100 group relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed bg-white py-20 px-5 text-center"
          >
            <div className="relative z-10 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-brand-500 mb-4 inline-block dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z" />
              </svg>
              <p className="dark:text-brand-300 mx-auto max-w-xs text-xs">
                JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB
              </p>
            </div>
            <div className="dark:bg-brand-600 bg-brand-50 absolute inset-4 cursor-pointer rounded opacity-0 group-hover:opacity-100 ">
              <input {...getInputProps()} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div>
            <label
              htmlFor="item-name"
              className="font-display text-brand-700 mb-2 block dark:text-white"
            >
              Name<span className="text-red">*</span>
            </label>
            <input
              type="text"
              className="dark:bg-brand-700 border-brand-100 hover:ring-accent/10 focus:ring-accent dark:border-brand-600 dark:placeholder:text-brand-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
              placeholder="Item name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="item-name"
              className="font-display text-brand-700 mb-2 block dark:text-white"
            >
              External Link<span className="text-red">*</span>
            </label>
            <input
              type="text"
              className="lowercase dark:bg-brand-700 border-brand-100 hover:ring-accent/10 focus:ring-accent dark:border-brand-600 dark:placeholder:text-brand-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
              placeholder="https://nftsitename.com/item/123"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="item-description"
            className="font-display text-brand-700 mb-2 block dark:text-white"
          >
            Description
          </label>
          <p className="dark:text-brand-300 text-2xs mb-3">
            The description will be included on the {"item's"} detail page underneath its image.
            Markdown syntax is supported.
          </p>
          <textarea
            id="item-description"
            className="dark:bg-brand-700 border-brand-100 hover:ring-accent/10 focus:ring-accent dark:border-brand-600 dark:placeholder:text-brand-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
            rows={4}
            required
            placeholder="Provide a detailed description of your item."
          />
        </div>
      </div>
    </div>
  );
};

export default CreateCollection;
