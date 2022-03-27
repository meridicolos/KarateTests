package examples.users;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features={"src/test/java/examples/users/users.feature"}
        ,glue={"stepDefinition"}
)
public class UndoFeatureTest {
}
