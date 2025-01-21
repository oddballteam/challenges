package com.oddball.challenges.controllers;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oddball.challenges.entities.oddball.Oddball;
import com.oddball.challenges.repositories.oddball.OddballRepository;

@RestController
@RequestMapping("/api/oddballs")
public class OddballsController {

    @Autowired
    private OddballRepository oddballRepository;

    @GetMapping
    public List<Oddball> getAllOddballs() {
        return StreamSupport.stream(oddballRepository.findAll().spliterator(), false).
                collect(Collectors.toList());
    }

    // @GetMapping("/{id}")
    // public Oddball getOddball(@PathVariable Long id) {
    //     // Fetch an Oddball by ID
    // }

    // @PostMapping
    // public Oddball createOddball(@RequestBody Oddball oddball) {
    //     // Save a new Oddball
    // }

    // @PutMapping("/{id}")
    // public void updateOddball(@PathVariable Long id, @RequestBody Oddball oddball) {
    //     // Update an existing Oddball
    // }

    // @DeleteMapping("/{id}")
    // public void deleteOddball(@PathVariable Long id) {
    //     // Delete an Oddball
    // }
}