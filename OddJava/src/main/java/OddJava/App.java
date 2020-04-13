/*
 * Oddball Coding Challenge
 * 
 * CSV data files located in src/main/resources
 * For convenience, we've included common CSV packages as part of the build, but their use is not required. 
 */
package OddJava;

import org.apache.commons.csv.*;
import com.opencsv.*;

public class App {
    public String getPatient() {
        return "Hello patient.";
    }

    public static void main(String[] args) {
        System.out.println(new App().getPatient());
    }
}
