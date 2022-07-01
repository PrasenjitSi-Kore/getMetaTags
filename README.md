## Get Meta Tags
##### We can use this utitlity to list all the meta tags for a bot used in message, entity and script node.

#### How to use ?
1. Take the export of the bot for which you want to get the list of meta tags.
2. Put **getMetaTag.js** file into the bot export folder.
3. now execute the **getMetaTag.js** using below command.
> node getMetaTag.js
4. Now it will fetch all the meta tags used in the bot and list on the console.

#### Sample Output


                    ~~~~~  M  E  T  A    T  A  G  S  ~~~~~                                     

=============================================================================
Node Name:  dropCustomTag                                  Node Type:  script

Custom Tags: 

   1. tags.addMessageLevelTag("feedbackResponse", "No")
   2. tags.addMessageLevelTag("lastMessage", context.session.BotUserSession.lastMessage.messagePayload.message.body)

=============================================================================
Node Name:  criticalFailureScript                          Node Type:  script

Custom Tags: 

   1. tags.addSessionLevelTag(env.INTENT_STATUS, env.FAILED)
   2. tags.addMessageLevelTag(env.INTENT_STATUS, env.FAILED)
   3. tags.addMessageLevelTag(env.INTENT, context.sourceintent)
   4. tags.addSessionLevelTag(env.INTENT_STATUS, env.FAILED)
   5. tags.addMessageLevelTag(env.INTENT_STATUS, env.FAILED)
   6. tags.addMessageLevelTag(env.INTENT, context.sourceintent)

