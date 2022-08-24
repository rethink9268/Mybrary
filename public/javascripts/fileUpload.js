const rootStyles = window.getComputedStyle(document.documentElement);

if (
  rootStyles.getPropertyValue("--book-cover-width-large") != null &&
  rootStyles.getPropertyValue("--book-cover-width-large") !== ""
) {
  ready();
} else {
  document.getElementById("main-css").addEventListener("load", ready);
}

function ready() {
  const coverWidth = parseFloat(
    rootStyles.getPropertyValue("--book-cover-width-large")
  );
  const coverAspectRation = parseFloat(
    rootStyles.getPropertyValue("--book-cover-aspect-ratio")
  );
  const coverHeight = coverWidth / coverAspectRation;

  FilePond.registerPlugin(FilePondPluginImagePreview);
  FilePond.registerPlugin(FilePondPluginFileEncode);
  FilePond.registerPlugin(FilePondPluginImageResize);
  FilePond.registerPlugin(FilePondPluginImageCrop);

  const inputElement = document.querySelector('input[type="file"]');
  const pond = FilePond.create(inputElement);

  pond.setOptions({
    imageCropAspectRatio: 1 / coverAspectRation,
    stylePanelAspectRatio: 1 / coverAspectRation,
    imageResizeTargetWidth: coverWidth,
    imageResizeTargetHeight: coverHeight,
    imageResizeMode: "cover",
  });
}
