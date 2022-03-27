package examples.users;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        format = {"pretty", "html:target/Destination", "json:target/Destination/cucumber.json"},
        features={"src/test/java/examples/users/users.feature"}
)
public class UndoFeatureTest {
}
