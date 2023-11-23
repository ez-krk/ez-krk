use anchor_lang::prelude::*;

declare_id!("5JHW8AvuXgBGJ2bb8Cpri1mu1XaVxtxaWtnGqn5Z361Q");

#[program]
pub mod ez_krk_dev {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
