# direction-sensitive-material-ui
this component is created to solve multi language websites problem



# Steps

1. Copy the dependencies you don't have into your own project [package.json]
2. Add this component to your own component place
3. Change the hook you need to get direction of the project in line 9
4. Change the direction of the project in line 27



# Examples

```
<DirectionSensitive>
    <TextField
               id="filled-multiline-static"
               label={getText("ticketSendMessage")}
               multiline
               rows={4}
               variant="outlined"
               sx={{display: "flex", flex: {xs: 1, md: 5}, borderWidth: 2, width: {xs: "95%"}}}
               value={messageText}
               onChange={(e) => setMessageText(e.target.value)}
               />
</DirectionSensitive>
```
