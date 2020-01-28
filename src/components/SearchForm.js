import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function SearchForm({ setSearchInput })
{

    const handleChanges = e =>
    {
        setSearchInput(e.target.value.toLowerCase());
    }

    const handleSubmit = e =>
    {
        e.preventDefault();
    }

    return (
        <section className="search-form">
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for='search-characters'>Search Characters</Label>
                    <Input
                        id='search-characters'
                        type='text'
                        name='search-characters'
                        placeholder='Search Characters...'
                        onChange={handleChanges}
                    />
                </FormGroup>
            </Form>
        </section>
    );
}
