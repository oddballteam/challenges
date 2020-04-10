import org.junit.Test;
import static org.junit.Assert.*;
import OddJava.App;

public class AppTest {
    @Test
    public void testAppHasATest() {
        App classUnderTest = new OddJava.App();
        assertNotNull("app should have tests", classUnderTest.getPatient());
    }
}
