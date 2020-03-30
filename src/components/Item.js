import React, { Component } from 'react'
import { Box ,Button,Text, Paragraph} from 'grommet'
import {Cart} from 'grommet-icons'
import {Card} from 'react-bootstrap'
export default class Item extends Component {

    state = {
        name:'My Item',
        img: '',
        desc: 'i am a description',
        price: 100
    }



    render() {
        return (
            <Box align='center' margin='large' basis='large'>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///9YWFpYWFhNTU1ZWVtPT1Kvr6+/v7/k5OZGRkljY2X29vdRUVKZmZlUVFZ+fn/b29zd3d3IyMjy8vNhYWS6urqfn59SUlFKSkqDg4Xt7e1tbW+UlJREREbR0dFzc3OpqamMjIyAgII5OTyfXoMJAAAF30lEQVR4nO2b64KjKBCFFdTYSkiiMZKbmu33f8c1iSBRjDbT262z55uZHwOlcKjiKnEcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWRCrR0mKZFv9atb6P8JM9oBstMRDPRHH5tXp9H+GVPOBHLTGgz0S2/rV6fR/hh/vgVaH/TITCRQCFy+d/oPDaiPlHS/y7FO7PT/Sp769SaAQKlw8ULh8oXD5QuHyg8I85bZMsyLJsVYQDByXxLskOl9vttg6K1GwykbDcPDlqRUmFvDy8si6GK10kZrZdy2Id5VTCyCY4dS12QUnuefkdSsltuNgJCq/8AYsMCj3CdPL8Ghhfsgs2TFAz104cBJ5gzzMS4j3+ciaOLxqTs/B5a3I/YhFlaK+w2T25JoUdCKEGhWmwvzJufOBOftCNC48abLjWckUkTBYf5rb9AYWnNfVdr/4zSWEljJYeEWtlYWwsz7U+9/szhXFAKBkU11O4FgPGhIjqYXETxBtoLVuJbxWSLh2FYTlUZaPCyneluXxhq9G/j0iXNoZ7Fp6wC9QRhd1h46WQxGVj+nSFiRYZJKeC1v98FZO8rC0+Wv9RwRgVIm8VunT37Qr5ZpW9opeRUdmp7oE11BOVwjhqzbm4rcI0TsOslOW7InGIeovvBbt7fnJwZbt4Xq6fy3+PwrczfiZcr1XIxIf4MCA+1RhClTndtNNDwhs35puVstACMq6ELIRQm3nRWmGiGr/2NSOXZGB1EjfJcesLWukGp6jpbfysIvRFSUFly3AbJ9oq3LE2Lv3zarygTClknUFxV0/sjwz5RlGYH60jxaInWipMz1xGFGeTxrhSjSlRd51ZMX1E9vyq+2xdWNOWvaxxLBUefDVtsUmdI1ZB7We9PPIy55x7Dye+bE2LMLVTuGvnLdZbWRsplEKvt9B2Dvqs043RmridU/oPj2GncKOqVI/xkwjkEyY3bLWl6H1e7HGUEi1GUyuFW7WU8Q9mix6Xpo4eqwy52lqgH8TOYzXUKDTlvsdK4ZFLhfupX/o3UqFvcnqp+dAUh4nsFWxqi7bYKEzfjBpDSIWub+q3FybHLfNYspNBw29TC1TYKFRT28tD71EKjVNapfq1MYidUO5gjL30PTYK1dT2hZhRCrlpt962mTGInVPeKCT9qWQMG4Vq5Js4U9x578NVq9D4ylRtMaZHjcRC4U51w32xHaWn0CQhGVOo9pU/orBtcJf5Y3zGXYXvfUiNCmO16PkRhZU2e41y/aJCsw9/WOFlws5e4i1S4XH46PDPFc4iSv9ThX+/D2ehcHo/JIQsMkqnj6UWCmfhw7Y63t57DyFiiT7cqXNbNv2L0KJ86DSbNc+zWXkvQqHar/Lesdkgi4pSfa/z9R3wInx4EvL4j08ucKY+HDozOMoNqUun9sSZ+VCG4dABbKHO2ojhdNPIzHwoCyTRUH3lnpsQOm3GmJkP5QE1IQNHzFvtvoE/6WvJzBTKREKHPiqttZXbpFPamUWpIxXmQ4d36bndYBBRjnfGmfnQiVQvG/pytm2/iNXra3GuijAdYJYK13KD5PnVwCtX2jUMz+O+z6Nob4BUX1L4U1HafgtzWVQVp/QU7ookq25alwtam+H7Quqmwtx86OyVdzzX93NCcna/Sif0CT67vhFmq/CnfOhkMgYfH9frRVrzg8SXJUwi+NAFpvn70Clzt0dXoROWpnt4C1F4inive/UU1p2Rjx3azDVK64yz35VoUOicLtx/e/b2+z5sfgfc/+SRrinTbs49jIRhO3WqIkF7d/wUTaNscvl/o0L1giEfSiwUfj7v5AnSfzQ8REL4fvNjbyoEORoXL/G22hAxcEm4uSNcyuyrScLqqsyNJaQy21TNEdJs1WDMPhVZUFWHQ1UFw7fOHypPycrMs8ptrmkxH2Zvs524fd1XBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Kv8C3pccWzEs/nIAAAAAElFTkSuQmCC" />
  <Card.Body>
        <Card.Title> <Text size='xlarge'>{this.state.name}</Text> </Card.Title>
    <Card.Text>

        <Paragraph size='medium'>{this.state.desc}</Paragraph>
    </Card.Text>
    <Button
    icon={<Cart />}
    color='accent-1'
    focusIndicator='false'
    primary
    fill='true'
  label="Add to Cart"
  onClick={() => {}}
/>
  </Card.Body>
</Card>

            </Box>

        )
    }
}
