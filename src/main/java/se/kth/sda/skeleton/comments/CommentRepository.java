package se.kth.sda.skeleton.comments;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
  // findAllyBy + parameter's name?  JPA automatically generates the function?
  List<Comment> findAllByPostId(Long postId);
}
