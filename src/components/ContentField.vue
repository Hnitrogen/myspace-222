<template>
    <div class="container content-field">
        <div class="card">
            <div class="card-body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.content-field {
    margin-top: 20px;
}

.card {
    background-color: rgba(31,34,40,0.3);
}
.card-body {
    background-color: rgba(31,34,40,0.3);
}
</style>