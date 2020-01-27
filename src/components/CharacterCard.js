import React from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardHeader, CardFooter, CardTitle,
  CardSubtitle, Button
} from 'reactstrap';

export default function CharacterCard({ character })
{
    return (
        <div className='character'>
            <Card>
                <CardHeader tag="h3"> {character.name} </CardHeader>
                <CardImg top width='100%' src={character.image} />
                <CardBody>
                    <CardText>Status: {character.status}</CardText>
                    <CardText>Species: {character.species}</CardText>
                    <CardText>Gender: {character.gender}</CardText>
                </CardBody>
                <CardFooter className="text-muted"> Appears in {character.episode.length} episodes </CardFooter>
            </Card>
        </div>
    )
}
