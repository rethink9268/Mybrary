document.addEventListener("DOMContentLoaded", () => {
  FilePond.registerPlugin(FilePondPluginImagePreview);
  FilePond.registerPlugin(FilePondPluginFileEncode);
  FilePond.registerPlugin(FilePondPluginImageResize);
  FilePond.registerPlugin(FilePondPluginImageCrop);

  const inputElement = document.querySelector('input[type="file"]');
  const pond = FilePond.create(inputElement);

  pond.setOptions({
    imageCropAspectRatio: "2:3",
    stylePanelAspectRatio: 150 / 100,
    imageResizeTargetWidth: 100,
    imageResizeTargetHeight: 150,
    imageResizeMode: "cover",
  });
});
