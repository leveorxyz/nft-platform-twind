import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PropertiesModal from './PropertiesModal';

const CreateCollection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

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
        <div>
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
            className="dark:bg-brand-700 border-brand-100 hover:ring-accent/10 focus:ring-accent dark:border-brand-600 dark:placeholder:text-brand-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
            rows={4}
            required
            placeholder="Provide a detailed description of your item."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="font-display text-brand-700 mb-2 block dark:text-white">
              Collection
            </label>
            <p className="dark:text-brand-300 text-2xs mb-3">
              This Is The Collection Where Your Item Will Appear.
            </p>
            <select
              className="dark:bg-brand-700 border-brand-100 hover:ring-accent/10 focus:ring-accent dark:border-brand-600 dark:placeholder:text-brand-300 w-full rounded-lg py-3 px-2 hover:ring-2 dark:text-white"
              defaultValue="Canada"
            >
              <option>Collection 1</option>
              <option>Collection 2</option>
              <option>Collection 3</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="item-supply"
              className="font-display text-brand-700 mb-2 block dark:text-white"
            >
              Supply
            </label>

            <div className="mb-3 flex items-center space-x-2">
              <p className="dark:text-brand-300 text-2xs">
                The number of items that can be minted. No gas cost to you!
              </p>
            </div>

            <input
              type="text"
              className="dark:bg-brand-700 border-brand-100 hover:ring-accent/10 focus:ring-accent dark:border-brand-600 dark:placeholder:text-brand-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
              placeholder="1"
            />
          </div>
        </div>

        <div className="dark:border-brand-600 border-brand-100 relative border-b py-6">
          <div className="flex items-center justify-between">
            <div className="flex">
              <svg className="icon fill-brand-700 mr-2 mt-px h-4 w-4 shrink-0 dark:fill-white">
                <use xlinkHref="/images/icons/icons.svg#icon-level"></use>
              </svg>

              <div>
                <label className="font-display text-brand-700 block dark:text-white">Levels</label>
                <p className="dark:text-brand-300">Numerical Traits That Show As A Progress Bar.</p>
              </div>
            </div>
            <button
              onClick={onOpen}
              className="group dark:bg-brand-700 hover:bg-accent border-accent flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border bg-white hover:border-transparent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-accent group-hover:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="dark:border-brand-600 border-brand-100 relative border-b py-6">
          <div className="flex items-center justify-between">
            <div className="flex">
              <svg className="icon fill-brand-700 mr-2 mt-px h-4 w-4 shrink-0 dark:fill-white">
                <use xlinkHref="/images/icons/icons.svg#icon-properties"></use>
              </svg>

              <div>
                <label className="font-display text-brand-700 block dark:text-white">
                  Properties
                </label>
                <p className="dark:text-brand-300">Textual Traits That Show Up As Rectangles.</p>
              </div>
            </div>
            <button
              onClick={onOpen}
              className="group dark:bg-brand-700 hover:bg-accent border-accent flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border bg-white hover:border-transparent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-accent group-hover:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="dark:border-brand-600 border-brand-100 relative border-b py-6">
          <div className="flex items-center justify-between">
            <div className="flex">
              <svg className="icon fill-brand-700 mr-2 mt-px h-4 w-4 shrink-0 dark:fill-white">
                <use xlinkHref="/images/icons/icons.svg#icon-stats"></use>
              </svg>

              <div>
                <label className="font-display text-brand-700 block dark:text-white">Stats</label>
                <p className="dark:text-brand-300">Numerical Traits That Just Show As Numbers.</p>
              </div>
            </div>
            <button
              onClick={onOpen}
              className="group dark:bg-brand-700 hover:bg-accent border-accent flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border bg-white hover:border-transparent"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-accent group-hover:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="dark:border-brand-600 border-brand-100 relative border-b py-6">
          <div className="flex items-center justify-between">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-accent mr-2 mt-px h-4 w-4 shrink-0"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M7 10h13a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 13.262-3.131l-1.789.894A5 5 0 0 0 7 9v1zm-2 2v8h14v-8H5zm5 3h4v2h-4v-2z" />
              </svg>

              <div>
                <label className="font-display text-brand-700 block dark:text-white">
                  Unlockable Content
                </label>
                <p className="dark:text-brand-300">
                  Include unlockable content that can only be revealed by the owner of the item.
                </p>
              </div>
            </div>
            <input
              type="checkbox"
              value="checkbox"
              name="check"
              className="checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-brand-400 bg-brand-100 relative h-6 w-[2.625rem] cursor-pointer appearance-none rounded-full border-none after:absolute after:top-[0.1875rem] after:left-[0.1875rem] after:h-[1.125rem] after:w-[1.125rem] after:rounded-full after:transition-all checked:bg-none checked:after:left-[1.3125rem] checked:after:bg-white focus:ring-transparent focus:ring-offset-0"
            />
          </div>
        </div>

        <div className="dark:border-brand-600 border-brand-100 relative mb-6 border-b py-6">
          <div className="flex items-center justify-between">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="fill-brand-700 mr-2 mt-px h-4 w-4 shrink-0 dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0zM11 16v2h2v-2h-2zm0-7v5h2V9h-2z" />
              </svg>

              <div>
                <label className="font-display text-brand-700 dark:text-white">
                  Explicit & Sensitive Content
                </label>

                <p className="dark:text-brand-300">
                  Set this item as explicit and sensitive content.
                </p>
              </div>
            </div>
            <input
              type="checkbox"
              value="checkbox"
              name="check"
              className="checked:bg-accent checked:focus:bg-accent checked:hover:bg-accent after:bg-brand-400 bg-brand-100 relative h-6 w-[2.625rem] cursor-pointer appearance-none rounded-full border-none after:absolute after:top-[0.1875rem] after:left-[0.1875rem] after:h-[1.125rem] after:w-[1.125rem] after:rounded-full after:transition-all checked:bg-none checked:after:left-[1.3125rem] checked:after:bg-white focus:ring-transparent focus:ring-offset-0"
            />
          </div>
        </div>

        <div>
          <label className="font-display text-brand-700 mb-2 block dark:text-white">
            Blockchain
          </label>
          <select
            className="dark:bg-brand-700 border-brand-100 hover:ring-accent/10 focus:ring-accent dark:border-brand-600 dark:placeholder:text-brand-300 w-full rounded-lg py-3 px-2 hover:ring-2 dark:text-white"
            defaultValue="Canada"
          >
            <option>Ethereum</option>
            <option>Solana</option>
            <option>Polygon</option>
          </select>
        </div>

        <div className="mb-6">
          <div className="mb-2 flex items-center space-x-2">
            <label
              htmlFor="item-freeze-metadata"
              className="font-display text-brand-700 block dark:text-white"
            >
              Freeze metadata
            </label>
          </div>

          <p className="dark:text-brand-300 text-2xs mb-3">
            Freezing your metadata will allow you to permanently lock and store all of this
            item&apos;s content in decentralized file storage.
          </p>

          <input
            type="text"
            className="dark:bg-brand-700 bg-brand-50 border-brand-100 dark:border-brand-600 dark:placeholder:text-brand-300 w-full rounded-lg py-3 px-3 dark:text-white"
            placeholder="To freeze your metadata, you must create your item first."
          />
        </div>

        <button className="bg-accent cursor-pointer rounded-full py-3 px-8 text-center font-semibold text-white transition-all hover:bg-accent-lighter">
          Create
        </button>
      </div>

      <PropertiesModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default CreateCollection;
