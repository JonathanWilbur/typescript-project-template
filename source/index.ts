function hello (): string {
    return "It worked!";
}

if (require.main === module) {
    console.log(hello());
} else {
    // This is not the main module.
}
