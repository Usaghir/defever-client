package se.kth.sda.skeleton.comments;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CommentController {
  @Autowired private CommentService commentService;

  @GetMapping("/comments")
  public List<Comment> getAllByPostId(@RequestParam("postId") Long postId) {
    return commentService.getAllByPostId(postId);
  }

  @PostMapping("/comments")
  public Comment postComment(@RequestBody Comment comment) {
    return commentService.create(comment);
  }

  @DeleteMapping("/comments/{id}")
  public void delete(@PathVariable Long id) {
    commentService.deleteById(id);
  }
}
