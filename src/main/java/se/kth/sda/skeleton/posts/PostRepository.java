package se.kth.sda.skeleton.posts;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import se.kth.sda.skeleton.user.User;

import java.util.List;

/*
   extend the appropriate JpaRepository to get common database operations for Post
   Add also the correct annotation to describe the Repository.
*/
@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

}
