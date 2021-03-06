const editor = new EditorJS({
  holder: 'editorjs',

  tools: {
    header: {
      class: Header,
      inlineToolbar: ['link']
    },
    list: {
      class: List,
      inlineToolbar: ['link', 'bold']
    },
    embed: {
      class: Embed,
      inlineToolbar: false,
      config: {
        services: {
          youtube: true,
          coob: true
        }
      }
    }
  }
});

let saveBtn = document.querySelector('button');

saveBtn.addEventListener('click', () => {
  editor.save().then((outputData) => {
    console.log(outputData);
  })
})