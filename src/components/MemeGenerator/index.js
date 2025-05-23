import {Component} from 'react'

import {
  MemeGeneratorBgContainer,
  MemeGeneratorBottomConatiner,
  MemeGeneratorContentConatiner,
  Heading,
  InputLabelContainer,
  LabelTitle,
  InputElement,
  FontDropdownMenu,
  DropDownOptions,
  GenerateButton,
  MemeBgMainContainer,
  MemeContent,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

// Write your code here
class MemeGenerator extends Component {
  state = {
    imageUrlValue: '',
    topTextValue: '',
    bottomTextValue: '',
    isMemeGenerated: false,
    memeData: {
      imageUrl: '',
      topText: '',
      bottomText: '',
      fontSize: fontSizesOptionsList[0].optionId,
    },
  }

  changeImageUrlValue = event => {
    this.setState({imageUrlValue: event.target.value})
  }

  changeTopTextValue = event => {
    this.setState({topTextValue: event.target.value})
  }

  changeBottomTextValue = event => {
    this.setState({bottomTextValue: event.target.value})
  }

  changeFontValue = event => {
    this.setState({activeFontSizeValue: event.target.value})
  }

  createMemeContent = event => {
    event.preventDefault()
    const {
      imageUrlValue,
      topTextValue,
      bottomTextValue,
      activeFontSizeValue,
    } = this.state

    this.setState({
      isMemeGenerated: true,
      memeData: {
        imageUrl: imageUrlValue,
        topText: topTextValue,
        bottomText: bottomTextValue,
        fontSize: activeFontSizeValue,
      },
      imageUrlValue: '',
      topTextValue: '',
      bottomTextValue: '',
      activeFontSizeValue: fontSizesOptionsList[0].optionId,
    })
  }

  imageLinkInputContainer = () => {
    const {imageUrlValue} = this.state
    return (
      <InputLabelContainer>
        <LabelTitle htmlFor="imageUrl">Image URL</LabelTitle>
        <InputElement
          type="text"
          id="imageUrl"
          value={imageUrlValue}
          onChange={this.changeImageUrlValue}
          placeholder="Enter the Image URL"
        />
      </InputLabelContainer>
    )
  }

  topTextInputcontainer = () => {
    const {topTextValue} = this.state
    return (
      <InputLabelContainer>
        <LabelTitle htmlFor="topText">Top Text</LabelTitle>
        <InputElement
          type="text"
          id="topText"
          value={topTextValue}
          onChange={this.changeTopTextValue}
          placeholder="Enter the Top Text"
        />
      </InputLabelContainer>
    )
  }

  bottomTextInputContainer = () => {
    const {bottomTextValue} = this.state
    return (
      <InputLabelContainer>
        <LabelTitle htmlFor="bottomText">Bottom Text</LabelTitle>
        <InputElement
          type="text"
          id="bottomText"
          value={bottomTextValue}
          onChange={this.changeBottomTextValue}
          placeholder="Enter the Bottom Text"
        />
      </InputLabelContainer>
    )
  }

  fontSelectionInputContainer = () => {
    const {activeFontSizeValue} = this.state
    return (
      <InputLabelContainer>
        <LabelTitle htmlFor="bottomText">Font Size</LabelTitle>
        <FontDropdownMenu
          value={activeFontSizeValue}
          onChange={this.changeFontValue}
        >
          {fontSizesOptionsList.map(eachFontSize => (
            <DropDownOptions
              key={eachFontSize.optionId}
              value={eachFontSize.optionId}
            >
              {eachFontSize.displayText}
            </DropDownOptions>
          ))}
        </FontDropdownMenu>
      </InputLabelContainer>
    )
  }

  memeBgContainer = () => {
    const {memeData} = this.state

    return memeData ? (
      <MemeBgMainContainer data-testid="meme" imageProp={memeData.imageUrl}>
        <MemeContent changeFontSize={memeData.fontSize}>
          {memeData.topText}
        </MemeContent>
        <MemeContent changeFontSize={memeData.fontSize}>
          {memeData.bottomText}
        </MemeContent>
      </MemeBgMainContainer>
    ) : null
  }

  render() {
    const {isMemeGenerated} = this.state
    return (
      <MemeGeneratorBgContainer>
        <Heading>Meme Generator</Heading>
        <MemeGeneratorBottomConatiner>
          <MemeGeneratorContentConatiner>
            {this.imageLinkInputContainer()}
            {this.topTextInputcontainer()}
            {this.bottomTextInputContainer()}
            {this.fontSelectionInputContainer()}
            <GenerateButton type="button" onClick={this.createMemeContent}>
              Generate
            </GenerateButton>
          </MemeGeneratorContentConatiner>
          {isMemeGenerated && this.memeBgContainer()}
        </MemeGeneratorBottomConatiner>
      </MemeGeneratorBgContainer>
    )
  }
}

export default MemeGenerator
