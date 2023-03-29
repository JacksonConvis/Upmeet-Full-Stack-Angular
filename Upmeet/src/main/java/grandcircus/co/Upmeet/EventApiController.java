package grandcircus.co.Upmeet;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin 
public class EventApiController {

	@Autowired
	private EventRepository repo;
	
	// Status response for root URL path
	@RequestMapping("/")
	public Map<String, Object> home() {
		Map<String, Object> result = new LinkedHashMap<>();
		result.put("status", "OK");
		result.put("collections", new String[] { "/events" });
		return result;
	}
	
	// C(R)UD -- Read All
	@GetMapping("/events")
	public List<Event> readAll() {
			return repo.findAll();
	}
	
	// C(R)UD -- Read One
	@GetMapping("/events/{id}")
	public Optional<Event> readOne(@PathVariable("id") Long id) {
		return repo.findById(id);
	}
	
	// (C)RUD -- Create
	@PostMapping("/events")
	@ResponseStatus(HttpStatus.CREATED)
	public Event create(@RequestBody Event event) {
		repo.save(event);
		return event;
	}
	
	// CRU(D) -- Delete
	@DeleteMapping("/events/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable("id") Long id) {
		repo.deleteById(id);
	}
	
	// CR(U)D -- Update
	@PutMapping("/events/{id}")
	public Event update(@PathVariable("id") Long id,
			@RequestBody Event event) {
		event.setId(id);
		return repo.save(event);
	}
	
}

