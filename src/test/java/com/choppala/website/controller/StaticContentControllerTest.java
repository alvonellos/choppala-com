package com.choppala.website.controller;

import com.choppala.website.Main;
import lombok.NoArgsConstructor;
import lombok.extern.java.Log;
import lombok.val;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.core.env.Environment;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.io.*;
import java.net.URI;
import java.net.URL;
import java.util.stream.Stream;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;
import static org.mockito.MockitoAnnotations.initMocks;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.log;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@Log
@RunWith(SpringRunner.class)
@SpringBootTest(classes = Main.class)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@AutoConfigureMockMvc
@NoArgsConstructor
public class StaticContentControllerTest {
    @Autowired
    private Environment env;

    @Autowired
    private MockMvc mockMvc;

    @InjectMocks
    StaticContentController contentController;

    @Before
    public void setup() {
        try(val mocks = MockitoAnnotations.openMocks(this)) {
            assert(mocks != null);
        } catch (Exception e) {
            log.severe("Failed to open mocks");
        }
    }
    @Test
    public void contextLoads() {
        Stream.of(env,mockMvc, contentController).forEach(
                Assert::assertNotNull
        );
    }

    @Test
    public void staticContentShouldForwardIndex() throws Exception {
        mockMvc.perform(
                get("/"))
                .andExpect(forwardedUrl("/static/index.html"))
                .andExpect(status().isOk())
                .andDo(print())
                .andReturn();
    }
}
