<template>
    <div class="input-container">
        <input
            type="text"
            :value="value"
            :placeholder="placeholder"
        />
        <p>{{error}}</p>
    </div>
</template>

<script src="./my-input.js"></script>

<style scoped src="./my-input.scss" lang="scss"></style>
