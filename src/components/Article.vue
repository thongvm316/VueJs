<template>
  <div>
    <h2>Article Component</h2>
    <h2 v-bind="$attrs">{{ title }}</h2>
    <h2>Likes - {{ likes }}</h2>
    <h2>Published - {{ isPublic ? 'Yes' : 'No' }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Article default',
    },
    likes: Number,
    isPublic: Boolean,
  },
  inheritedProps: false,
}

/* 
        1. v-bind="$attrs" : In case, when component have these att: id, class, style att (Eg: inheritedProps: <Article id="my-article" class='test' .../>) --> when this component be rendered --> these attrs render in to element that has v-bind="$attrs"

        2. inheritedProps: false --> prevent auto add these attrs into parent comp (this comp is div element)
    */
</script>

<style scoped></style>
