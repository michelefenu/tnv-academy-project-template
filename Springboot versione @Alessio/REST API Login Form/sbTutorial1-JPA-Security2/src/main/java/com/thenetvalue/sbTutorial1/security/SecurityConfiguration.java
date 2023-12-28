package com.thenetvalue.sbTutorial1.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration {

    PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // vecchio metodo di creazione di un oggetto user e uno admin che possiedono uno username e una password
    /*@Bean
    public InMemoryUserDetailsManager userDetailsService() {
        UserDetails user = User
                .withUsername("user")
                .password(passwordEncoder.encode("user"))
                .roles("USER")
                .build();
        UserDetails admin = User
                .withUsername("admin")
                .password(passwordEncoder.encode("admin"))
                .roles("ADMIN")
                .build();
        return new InMemoryUserDetailsManager(user, admin);
    }*/


    @Bean
    public UserDetailsManager users(DataSource dataSource) {

//        UserDetails user = User
//                .withUsername("user")
//                .password(passwordEncoder.encode("user"))
//                .roles("USER")
//                .build();
//
//        UserDetails admin = User
//                .withUsername("admin")
//                .password(passwordEncoder.encode("admin"))
//                .roles("ADMIN")
//                .build();

        UserDetails alessio = User
                .withUsername("alessio")
                .password(passwordEncoder.encode("alessio"))
                .roles("ADMIN")
                .build();
        JdbcUserDetailsManager judm = new JdbcUserDetailsManager(dataSource);
//        judm.createUser(user);
//        judm.createUser(admin);
//          judm.createUser(alessio);

        return judm;




        // crea un oggetto che si avvale di librerie per connettere la API a un database

//        judm.setAuthoritiesByUsernameQuery("select username,authority "
//                + "from authorities "
//                + "where username = ?");
//        judm.setUsersByUsernameQuery("select username,password,enabled "
//                + "from user "
//                + "where username = ?");


    }


    //stabilisce i principi di sicurezza all'accesso di determinati indirizzi http
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(
                auth -> auth
                        .requestMatchers(HttpMethod.GET, "/users/**")
                        .hasAnyRole("USER","ADMIN")
                        .requestMatchers(HttpMethod.POST, "/users/")
                        .hasRole("ADMIN")
                        .requestMatchers(HttpMethod.POST, "/users/login")
                        .hasRole("USER")
                        .requestMatchers(HttpMethod.POST, "/users/logout")
                        .hasRole("USER")
                        .requestMatchers(HttpMethod.PUT, "/users/**")
                        .hasRole("ADMIN")
                        .requestMatchers(HttpMethod.DELETE, "/users/**")
                        .hasRole("ADMIN")
                        .anyRequest().authenticated())
            .httpBasic(Customizer.withDefaults());

        return http.build();
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return this.passwordEncoder;
    }
}
