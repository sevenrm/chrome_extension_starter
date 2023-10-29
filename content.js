// console.log("Does our content script get run?!");

window.addEventListener("load", function () {
  let recipeSection = null;
  try {
    recipeSection = document.querySelector('div[id*="tasty-recipes-"]');
    console.log("Found the recipe!", recipeSection);
  } catch (error) {
    console.log("We didn't find a recipe!", error.toString());
  }

  if (recipeSection) {
    console.log("We found the recipe section!", recipeSection);
    document.getElementsByTagName("html")[0].innerHTML =
      recipeSection.outerHTML;
    document.getElementsByTagName("footer")[0].remove();
  }
});
