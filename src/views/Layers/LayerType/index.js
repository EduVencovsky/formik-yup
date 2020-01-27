import React from 'react'
import { connect } from 'formik'
import Grid from '@material-ui/core/Grid'
import ImageCard from '../../../components/Cards/ImageCard'

const cards = [
    {
        id: 1,
        url: "https://www.mass.gov/files/styles/embedded_half_width/public/basemap-topo_620.png",
        title: "Basemap",
        description: "Mapa de Fundo"
    },
    {
        id: 2,
        url: "https://static.vecteezy.com/system/resources/thumbnails/000/153/588/small/vector-roadmap-location-map.jpg",
        title: "Vetor",
        description: "..........."
    },
    {
        id: 3,
        url: "https://www.mass.gov/files/styles/embedded_half_width/public/basemap-topo_620.png",
        title: "Imagem",
        description: "..........."
    },
    {
        id: 4,
        url: "https://static.vecteezy.com/system/resources/thumbnails/000/153/588/small/vector-roadmap-location-map.jpg",
        title: "Dados",
        description: "Dataset ou conjunto de dados"
    },
]

function LayerType({ formik }) {

    const { values, setFieldValue } = formik

    return (
        <div>
            <Grid container spacing={3}>
                {
                    cards.map(card => (
                        <Grid
                            item xs sm
                            key={card.id}
                        >
                            <ImageCard
                                onClick={() => setFieldValue('layerType.type', card.id)}
                                selected={values.layerType.type === card.id}
                                url={card.url}
                                title={card.title}
                                description={card.description}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default connect(LayerType)