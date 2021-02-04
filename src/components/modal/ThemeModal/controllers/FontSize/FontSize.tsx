import React, { useState, useEffect } from 'react'

import { useFontSize } from '../../../../../hooks/theme'
import { Container, SizeDemo, Content, Input, ButtonsContainer, Button } from './FontSizeStyle'

export default () => {
    // font size
    const { currentFontSize, fontSizeArray, setFontSize } = useFontSize()

    const [curFontIndex, setCurFontIndex] = useState(0)
    const [fillPercent, setFillPercent] = useState(0)

    useEffect(() => {
        fontSizeArray.forEach((font: any, i: number) => {
            if (font.name === currentFontSize) {
                setCurFontIndex(i + 1);
            }
        })
        const percent = (curFontIndex / fontSizeArray.length) * 100

        // allows path to match button layout
        if (percent === 20) {
            setFillPercent(0)
        } else if (percent === 40) {
            setFillPercent(25)
        } else if (percent === 60) {
            setFillPercent(50)
        } else {
            setFillPercent(percent)
        }


    }, [curFontIndex, currentFontSize, fontSizeArray])

    const handleSlideChange = (e: any) => {
        const { value } = e.target
        setFontSize(fontSizeArray[parseInt(value) - 1].name)
    }

    return (
        <Container>
            <SizeDemo fontSize={fontSizeArray[0].fontSize.normal}>Aa</SizeDemo>
            <Content>
                <Input
                    percent={fillPercent}
                    type={"range"}
                    min={1} max={5} step={1}
                    value={curFontIndex}
                    onChange={handleSlideChange}
                />
                <ButtonsContainer>
                    {fontSizeArray.map((font: any, i: number) => (
                        <Button
                            key={i}
                            isColored={i + 1 <= curFontIndex}
                            isCurrentSize={font.name === currentFontSize}
                            // onClick={() => setFontSize(font.name)}
                        />
                    ))}
                </ButtonsContainer>
            </Content>
            <SizeDemo fontSize={fontSizeArray.slice(-1)[0].fontSize.normal}>Aa</SizeDemo>
        </Container>
    )
}