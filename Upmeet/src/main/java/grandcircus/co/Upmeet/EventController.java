package grandcircus.co.Upmeet;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class EventController {
	
	@Autowired
	private EventRepository repo;
	
	
	@RequestMapping("/")
	public String giveHome(Model model){
		
		 Long id = 1L;
	        Optional<Event> events = repo.findById(id);
		
	        long count = repo.count();
	        String text ="goodbye";
	        
	        model.addAttribute(text);
	        model.addAttribute(count);
		model.addAttribute(events); 
		
//		System.out.println(model.toString());
		
		return "home";
		
	
	};
		
	

}
