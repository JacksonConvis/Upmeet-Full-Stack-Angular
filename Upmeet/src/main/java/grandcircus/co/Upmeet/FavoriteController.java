package grandcircus.co.Upmeet;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin 
public class FavoriteController{

	@Autowired
	private FavoritesRepository repo;
	
	
	//Read All
	@GetMapping("/favorites")
	public List<Favorite> readAll() {
			return repo.findAll();
	}
	
	//Read One
	@GetMapping("/favorites/{id}")
	public Optional<Favorite> readOne(@PathVariable("id") Long id) {
		return repo.findById(id);
	}
	
	//Create
	@PostMapping("/favorites")
	@ResponseStatus(HttpStatus.CREATED)
	public Favorite create(@RequestBody Favorite favorite) {
		repo.save(favorite);
		return favorite;
	}
	
	//Delete
	@DeleteMapping("/favorites/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable("id") Long id) {
		repo.deleteById(id);
	}
	
	//Update
	@PutMapping("/favorites/{id}")
	public Favorite update(@PathVariable("id") Long id,
			@RequestBody Favorite favorite) {
		favorite.setId(id);
		return repo.save(favorite);
	}
	
}

