package co.tiozao.wordcounter;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Map;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ApplicationTests {

	API api = new API();

	@Test
	public void emptyString() {
		Map<?,?> result = api.countWords("");
		Assert.assertTrue(result.get("error").equals("Empty input!"));
	}

	@Test
	public void oneWord() {
		Map<?,?> result = api.countWords("one");
		Assert.assertTrue(result.get("readableMessage").equals("Word count: 1"));
		Assert.assertEquals(result.get("wordCount"), 1);
	}

	@Test
	public void multipleWords() {
		Map<?,?> result = api.countWords("one two three");
		Assert.assertTrue(result.get("readableMessage").equals("Word count: 3"));
		Assert.assertEquals(result.get("wordCount"), 3);
	}

}
