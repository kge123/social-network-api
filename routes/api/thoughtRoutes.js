const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// /api/thoughts
router.route("/").get(getThoughts).post(createThought);
// /api/thoughts/:userId/thoughts
router.route("/:userId/reaction").post(createThought);
// /api/thoughts/:userId/thoughts/:thoughtId
router.route("/:userId/thoughts/:thoughtId").delete(deleteThought);

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thoughts/:thoughtId/reaction
router.route("/:thoughtId/reaction").post(addReaction);

// /api/Thoughts/:thoughtId/reaction/:reactionId
router.route("/:thoughtId/reaction/:reactionId").delete(removeReaction);

module.exports = router;
