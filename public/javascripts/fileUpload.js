document.addEventListener("DOMContentLoaded", () => {
  FilePond.registerPlugin(FilePondPluginImagePreview);
  FilePond.registerPlugin(FilePondPluginFileEncode);
  FilePond.registerPlugin(FilePondPluginImageResize);

  FilePond.setOptions({
    stylePanelAspectRation: 150 / 100,
    imageResizeTargetWidth: 100,
    imageResizeTargetHeight: 150,
  });
  const inputElement = document.querySelector('input[type="file"]');
  const pond = FilePond.create(inputElement);
});
