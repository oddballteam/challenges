package OddChallenge;

import org.junit.Test;
import static org.junit.Assert.*;

public class AppTest {
    @Test
    public void testAppHasATest() {
        App classUnderTest = new App();
        assertNotNull("app should have tests", classUnderTest.getPatient());
    }
}
