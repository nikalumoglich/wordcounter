package co.tiozao.wordcounter;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.collect.ImmutableMap;

@RestController
@CrossOrigin
@RequestMapping(value = "/service", produces = "application/json")
public class API {

	@RequestMapping(value = "/count-words", method = RequestMethod.GET)
	public Map<?,?> countWords(
			@RequestParam(value = "input") String input) {

		if(input.trim().isEmpty()) {
			return ImmutableMap.of("error", "Empty input!");
		}

		int wordCount = input.trim().split("\\s").length;
		StringBuilder readableResponse = new StringBuilder();
		readableResponse.append("Word count: ").append(wordCount);

		if (wordCount > 0) {
			return ImmutableMap.of("readableMessage", readableResponse.toString(),
					"wordCount", wordCount);
		}
		return ImmutableMap.of("readableMessage", readableResponse.toString());
	}
}
