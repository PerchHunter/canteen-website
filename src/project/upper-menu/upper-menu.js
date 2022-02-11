function replaceSupplierPortalImage() {
  const $supplierPortalImage = document.getElementsByClassName(
    "supplierPortal__image"
  )[0];
  const src = $supplierPortalImage.getAttribute("src");
  if (src === "images/upper-menu/supplier-portal.svg") {
    $supplierPortalImage.setAttribute(
      "src",
      "images/upper-menu/supplier-portal-hover.svg"
    );
  } else {
    $supplierPortalImage.setAttribute(
      "src",
      "images/upper-menu/supplier-portal.svg"
    );
  }
}

const $supplierPortal = document.getElementsByClassName(
  "upperMenu__supplierPortal"
)[0];
$supplierPortal.addEventListener("mouseenter", replaceSupplierPortalImage);
$supplierPortal.addEventListener("mouseleave", replaceSupplierPortalImage);
