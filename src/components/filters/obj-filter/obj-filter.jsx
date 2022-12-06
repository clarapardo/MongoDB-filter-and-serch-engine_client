import './obj-filter.css'
import { FormControl, InputLabel, Select, MenuItem, OutlinedInput, Chip, Box } from '@mui/material'
import { useState } from 'react'


const objectives = [
    'Lose weight',
    'Gain flexibility',
    'Get strong',
    'Relaxation',
]

const ObjFilter = ({ filtersInputs, setFiltersInputs }) => {

    const [objective, setObjectives] = useState([]);

    const handleChange = (event) => {
        const { value } = event.target
        const newSate = typeof value === 'string' ? value.split(',') : value
        setObjectives(newSate)
        setFiltersInputs({ ...filtersInputs, objective: newSate })
    }

    return (
        <FormControl fullWidth>
            <InputLabel id="objective-input">Objective</InputLabel>
            {/* <InputLabel id="objective-input">Goal</InputLabel> */}
            <Select
                labelId="objective"
                id="objective-input-label"
                label="objective"
                multiple
                value={objective}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                onChange={handleChange}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                    </Box>
                )}
            >
                {objectives.map((elm) => (
                    <MenuItem key={elm} value={elm}>{elm}</MenuItem>
                ))}
            </Select>
        </FormControl >
    )
}

export default ObjFilter