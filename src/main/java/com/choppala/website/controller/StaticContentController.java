package com.choppala.website.controller;

import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class StaticContentController {

    private final ResourceLoader resourceLoader;

    public StaticContentController(ResourceLoader resourceLoader) {
        this.resourceLoader = resourceLoader;
    }

    @GetMapping(value = "/", produces = MediaType.TEXT_HTML_VALUE)
    @ResponseBody
    public Resource serveStaticContent() {
        // Load and return your static HTML file
        return resourceLoader.getResource("classpath:/static/index.html");
    }
}