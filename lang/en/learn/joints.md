# 0-0

## Joints

A joint connects the physics colliders of two sprites, limiting their movement relative to each other.

Joint constructors accept two sprites as input. At least one of the sprites in a joint must have a dynamic physics collider.

Every sprite has a `sprite.joints` array, which contains all the joints it's currently connected to.

# 0-1

## GlueJoint

Do you like crafting in Legend of Zelda: Tears of the Kingdom? Then you'll love glue joints!

A `GlueJoint` is the simplest type of joint, it just glues two sprites together. The sprites don't have to be touching and they won't un-glue unless you remove the joint.

But wait, why use a glue joint instead of `sprite.addCollider`?

- each sprite can have its own physics properties
- each sprite can detect collisions separately
- removing a joint doesn't remove the sprites

Try gluing and un-gluing the stick and ball sprite in the mini example. If you want a challenge, throw the ball straight up in the air and try to stick it to the top of the stick!

# 1-1

## DistanceJoint

By default, a `DistanceJoint` is attached at the center of each sprite that it's connected to. To shift the joint's attachment points, edit its `offsetA` and `offsetB` vectors.

Adjusting the joint's `springiness` ratio changes the amount it can stretch and compress.

`0.0` = steel rod (default)  
`0.2` = stiff spring  
`0.4` = tight spring  
`0.6` = bouncy spring  
`0.8` = slinky  
`1.0` = bungee cord

You can also adjust the joints's `damping` ratio to change how quickly it loses vibrational energy.

# 2-0

## WheelJoint

A `WheelJoint` connects a vehicle body to a wheel. Use wheel joints to create drive-able vehicles!

Every wheel joint has a motor, which can be enabled by setting `speed` to your desired motor speed, `maxTorque` to the motor's power, or `motorEnabled` to `true`.

Disabling a wheel joint motor is like putting a car in neutral, it causes the wheel to roll freely. The joint's speed must be set to zero for the wheel to brake.

Try driving the car in this example. Can you make it to the end of the road?

The car in this example only has the rear wheel drive, how could you add front wheel drive to make the car a 4x4?

# 3-0

## RevoluteJoint

A `RevoluteJoint` enables one or two sprites to rotate around the same attachment point.

Use revolute joints to create seesaws, pendulums, and doors.

Revolute joints with a small `maxTorque` and default `speed` of zero can resist being moved. Try clicking around this example to drop small boxes on the seesaw. How many boxes can you put on the seesaw before it tips?

# 4-0

## PrismaticJoint

Coming soon!
