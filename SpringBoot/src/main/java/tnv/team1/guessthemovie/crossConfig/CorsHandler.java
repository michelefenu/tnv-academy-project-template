/** Questa classe è una configurazione per gestire la politica di same-origin policy, consentendo le richieste
cross-origin dal dominio http://localhost:4200. È annotata con @Configuration, indicando che fornisce
configurazioni per il contesto dell'applicazione. Implementa l'interfaccia WebMvcConfigurer per configurare
 le regole CORS (Cross-Origin Resource Sharing). */

package tnv.team1.guessthemovie.crossConfig;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class CorsHandler implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:4200")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD")
                .allowCredentials(true);
    }
}