document.addEventListener("DOMContentLoaded", () => {
  FilePond.registerPlugin(FilePondPluginImagePreview);
  FilePond.registerPlugin(FilePondPluginFileEncode);
  FilePond.registerPlugin(FilePondPluginImageCrop);
  FilePond.registerPlugin(FilePondPluginImageResize);

  FilePond.setOptions({
    stylePanelAspectRation: 150 / 100,
    imageCropAspectRatio: 3 / 2,
    imageResizeTargetWidth: 100,
    imageResizeTargetHeight: 150,
  });
  const inputElement = document.querySelector('input[type="file"]');
  const pond = FilePond.create(inputElement);
});
