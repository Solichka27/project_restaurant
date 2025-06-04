import Fuse from "fuse.js";

const fuse = new Fuse(ItemMenusConst, {
  keys: ["name", "ingredients"],
});