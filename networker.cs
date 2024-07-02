// Assembly-CSharp
class GearEngine.Network.ApplicationNetworker : GearEngine.Network.Networker
{
    GearEngine.Network.CommonProtocolHandler commonProtocolHandler; // 0x30
    GearEngine.Network.LoginProtocolHandler loginProtocolHandler; // 0x38
    GearEngine.Network.PlayerProtocolHandler playerProtocolHandler; // 0x40
    GearEngine.Network.ShareProtocolHandler shareProtocolHandler; // 0x48
    GearEngine.Network.DungeonProtocolHandler dungeonProtocolHandler; // 0x50
    GearEngine.Network.DungeonPassProtocolHandler dungeonPassProtocolHandler; // 0x58
    GearEngine.Network.DungeonSkillProtocolHandler dungeonSkillProtocolHandler; // 0x60
    GearEngine.Network.DungeonStoryProtocolHandler dungeonStoryProtocolHandler; // 0x68
    GearEngine.Network.DungeonGadvBossMulProtocolHandler dungeonGadvBossMulProtocolHandler; // 0x70
    GearEngine.Network.DungeonCardProtocolHandler dungeonCardProtocolHandler; // 0x78
    GearEngine.Network.DungeonGuildBossMulProtocolHandler dungeonGuildBossMulProtocolHandler; // 0x80
    GearEngine.Network.DungeonWorldBossProtocolHandler dungeonWorldBossProtocolHandler; // 0x88
    GearEngine.Network.DungeonPlanesGateProtocolHandler dungeonPlanesGateProtocolHandler; // 0x90
    GearEngine.Network.SolomonProtocolHandler solomonProtocolHandler; // 0x98
    GearEngine.Network.DungeonPetBattleProtocolHandler dungeonPetBattleProtocolHandler; // 0xa0
    GearEngine.Network.DungeonTeamProtocolHandler dungeonTeamProtocolHandler; // 0xa8
    GearEngine.Network.DungeonDbiProtocolHandler dungeonDbiProtocolHandler; // 0xb0
    GearEngine.Network.DungeonDbiElementProtocolHandler dungeonDbiElementProtocolHandler; // 0xb8
    GearEngine.Network.DungeonRunProtocolHandler dungeonRunProtocolHandler; // 0xc0
    GearEngine.Network.DungeonWitchProtocolHandler dungeonWitchProtocolHandler; // 0xc8
    GearEngine.Network.DungeonResourceProtocolHandler dungeonResourceProtocolHandler; // 0xd0
    GearEngine.Network.ItemProtocolHandler itemProtocolHandler; // 0xd8
    GearEngine.Network.CostumeProtocolHandler costumeProtocolHandler; // 0xe0
    GearEngine.Network.BlackMarketProtocolHandler blackMarketProtocolHandler; // 0xe8
    GearEngine.Network.BookProtocolHandler bookProtocolHandler; // 0xf0
    GearEngine.Network.CurrencyProtocolHandler currencyProtocolHandler; // 0xf8
    GearEngine.Network.MatchProtocolHandler matchProtocolHandler; // 0x100
    GearEngine.Network.FriendProtocolHandler friendProtocolHandler; // 0x108
    GearEngine.Network.TreasureProtocolHandler treasureProtocolHandler; // 0x110
    GearEngine.Network.NewTaskProtocolHandler newTaskProtocolHandler; // 0x118
    GearEngine.Network.NewStrongProtocolHandler newStrongProtocolHandler; // 0x120
    GearEngine.Network.RankProtocolHandler rankProtocolHandler; // 0x128
    GearEngine.Network.MailProtocolHandler mailProtocolHandler; // 0x130
    GearEngine.Network.StoreProtocolHandler storeProtocolHandler; // 0x138
    GearEngine.Network.SkillProtocolHandler skillProtocolHandler; // 0x140
    GearEngine.Network.BagProtocolHandler bagProtocolHandler; // 0x148
    GearEngine.Network.EquipProtocolHandler equipProtocolHandler; // 0x150
    GearEngine.Network.StorageProtocolHandler storageProtocolHandler; // 0x158
    GearEngine.Network.TownProtocolHandler townProtocolHandler; // 0x160
    GearEngine.Network.ChatProtocolHandler chatProtocolHandler; // 0x168
    GearEngine.Network.GuildProtocolHandler guildProtocolHandler; // 0x170
    GearEngine.Network.GuildManageProtocolHandler guildManageProtocolHandler; // 0x178
    GearEngine.Network.GuildSupplyProtocolHandler guildSupplyProtocolHandler; // 0x180
    GearEngine.Network.GuildAdvProtocolHandler guildAdvProtocolHandler; // 0x188
    GearEngine.Network.GuildWishProtocolHandler guildWishProtocolHandler; // 0x190
    GearEngine.Network.GuildBossProtocolHandler guildBossProtocolHandler; // 0x198
    GearEngine.Network.GuildProStoreProtocolHandler guildProStoreProtocolHandler; // 0x1a0
    GearEngine.Network.GuildWishProProtocolHandler guildWishProProtocolHandler; // 0x1a8
    GearEngine.Network.GuildPetFetterProtocolHandler guildPetFetterProtocolHandler; // 0x1b0
    GearEngine.Network.CardProtocolHandler cardProtocolHandler; // 0x1b8
    GearEngine.Network.MapProtocolHandler mapProtocolHandler; // 0x1c0
    GearEngine.Network.ActivityProtocolHandler activityProtocolHandler; // 0x1c8
    GearEngine.Network.ActivityExchangeProtocolHandler activityExchangeProtocolHandler; // 0x1d0
    GearEngine.Network.ActivityLoginProtocolHandler activityLoginProtocolHandler; // 0x1d8
    GearEngine.Network.ActivityTaskProtocolHandler activityTaskProtocolHandler; // 0x1e0
    GearEngine.Network.ActivityRechargeProtocolHandler activityRechargeProtocolHandler; // 0x1e8
    GearEngine.Network.ActivityLotteryProtocolHandler activityLotteryProtocolHandler; // 0x1f0
    GearEngine.Network.ActivityAccProtocolHandler activityAccProtocolHandler; // 0x1f8
    GearEngine.Network.ActivityPoolProtocolHandler activityPoolProtocolHandler; // 0x200
    GearEngine.Network.ActivityCurrencyProtocolHandler activityCurrencyProtocolHandler; // 0x208
    GearEngine.Network.ActivityCartoonProtocolHandler activityCartoonProtocolHandler; // 0x210
    GearEngine.Network.ActivitySignInProtocolHandler activitySignInProtocolHandler; // 0x218
    GearEngine.Network.ActivityTimeLoginProtocolHandler activityTimeLoginProtocolHandler; // 0x220
    GearEngine.Network.ActivityInviteProtocolHandler activityInviteProtocolHandler; // 0x228
    GearEngine.Network.ActivityBingoProtocolHandler activityBingoProtocolHandler; // 0x230
    GearEngine.Network.ActivityWitchHouseProtocolHandler activityWitchHouseProtocolHandler; // 0x238
    GearEngine.Network.ActivityOwnExchangeProtocolHandler activityOwnExchangeProtocolHandler; // 0x240
    GearEngine.Network.ActivityPotProtocolHandler activityPotProtocolHandler; // 0x248
    GearEngine.Network.ActivityGiftcardProtocolHandler activityGiftcardProtocolHandler; // 0x250
    GearEngine.Network.ActivityBlindboxProtocolHandler activityBlindboxProtocolHandler; // 0x258
    GearEngine.Network.ActivityCostLoginProtocolHandler activityCostLoginProtocolHandler; // 0x260
    GearEngine.Network.ActivityRedPacketProtocolHandler activityRedPacketProtocolHandler; // 0x268
    GearEngine.Network.ActivityRechargeOnProtocolHandler activityRechargeOnProtocolHandler; // 0x270
    GearEngine.Network.ActivityFreeCoinProtocolHandler activityFreeCoinProtocolHandler; // 0x278
    GearEngine.Network.ActivityOutLimitProtocolHandler activityOutLimitProtocolHandler; // 0x280
    GearEngine.Network.ActivityMagicTowerProtocolHandler activityMagicTowerProtocolHandler; // 0x288
    GearEngine.Network.ActivityGorogoaProtocolHandler activityGorogoaProtocolHandler; // 0x290
    GearEngine.Network.PersonalTimeActivityProtocolHandler personalTimeActivityProtocolHandler; // 0x298
    GearEngine.Network.PlayerActivityLotteryProtocolHandler playerActivityLotteryProtocolHandler; // 0x2a0
    GearEngine.Network.TimeDungeonProtocolHandler timeDungeonProtocolHandler; // 0x2a8
    GearEngine.Network.VoteProtocolHandler voteProtocolHandler; // 0x2b0
    GearEngine.Network.ActivityBpSignProtocolHandler activityBpSignProtocolHandler; // 0x2b8
    GearEngine.Network.ActivityRouletteProtocolHandler activityRouletteProtocolHandler; // 0x2c0
    GearEngine.Network.ActivitySpExploreProtocolHandler activitySpExploreProtocolHandler; // 0x2c8
    GearEngine.Network.ActivityBoxkingProtocolHandler activityBoxkingProtocolHandler; // 0x2d0
    GearEngine.Network.PassProtocolHandler passProtocolHandler; // 0x2d8
    GearEngine.Network.ForgeProtocolHandler forgeProtocolHandler; // 0x2e0
    GearEngine.Network.GiftProtocolHandler giftProtocolHandler; // 0x2e8
    GearEngine.Network.PushGiftProtocolHandler pushGiftProtocolHandler; // 0x2f0
    GearEngine.Network.RechargeProtocolHandler rechargeProtocolHandler; // 0x2f8
    GearEngine.Network.ArenaProtocolHandler arenaProtocolHandler; // 0x300
    GearEngine.Network.TopArenaProtocolHandler topArenaProtocolHandler; // 0x308
    GearEngine.Network.LoginActivityProtocolHandler loginActivityProtocolHandler; // 0x310
    GearEngine.Network.TalentProtocolHandler talentProtocolHandler; // 0x318
    GearEngine.Network.AdProtocolHandler adProtocolHandler; // 0x320
    GearEngine.Network.GemProtocolHandler gemProtocolHandler; // 0x328
    GearEngine.Network.BattlePassProtocolHandler battlePassProtocolHandler; // 0x330
    GearEngine.Network.WitchBpProtocolHandler witchBpProtocolHandler; // 0x338
    GearEngine.Network.AfkBackProtocolHandler afkBackProtocolHandler; // 0x340
    GearEngine.Network.NoobProtocolHandler noobProtocolHandler; // 0x348
    GearEngine.Network.FundProtocolHandler fundProtocolHandler; // 0x350
    GearEngine.Network.NewInnersProtocolHandler newInnersProtocolHandler; // 0x358
    GearEngine.Network.HeadProtocolHandler headProtocolHandler; // 0x360
    GearEngine.Network.PetProtocolHandler petProtocolHandler; // 0x368
    GearEngine.Network.PetExploreProtocolHandler petExploreProtocolHandler; // 0x370
    GearEngine.Network.AbyssalHuntProtocolHandler abyssalHuntProtocolHandler; // 0x378
    GearEngine.Network.TriggerBoxProtocolHandler triggerBoxProtocolHandler; // 0x380
    GearEngine.Network.RaidEquipProtocolHandler raidEquipProtocolHandler; // 0x388
    GearEngine.Network.HeirloomProtocolHandler heirloomProtocolHandler; // 0x390
    GearEngine.Network.SoulProtocolHandler soulProtocolHandler; // 0x398
    GearEngine.Network.AlchemyWorkshopProtocolHandler alchemyWorkshopProtocolHandler; // 0x3a0
    GearEngine.Network.HeroHouseProtocolHandler heroHouseProtocolHandler; // 0x3a8
    GearEngine.Network.WitchInviteProtocolHandler witchInviteProtocolHandler; // 0x3b0
    GearEngine.Network.ActivityDailyWishProtocolHandler activityDailyWishProtocolHandler; // 0x3b8
    GearEngine.Network.ActivityPreorderProtocolHandler activityPreorderProtocolHandler; // 0x3c0
    GearEngine.Network.ActivityHundredRaceProtocolHandler activityHundredRaceProtocolHandler; // 0x3c8
    GearEngine.Network.ActivityCookingProtocolHandler activityCookingProtocolHandler; // 0x3d0
    GearEngine.Network.ActivityCrazyLotteryProtocolHandler activityCrazyLotteryProtocolHandler; // 0x3d8
    GearEngine.Network.ActivityFeastStoreProtocolHandler activityFeastStoreProtocolHandler; // 0x3e0
    GearEngine.Network.ActivityLoveliveProtocolHandler activityLoveliveProtocolHandler; // 0x3e8
    GearEngine.Network.ActivityDailyGiftProtocolHandler activityDailyGiftProtocolHandler; // 0x3f0
    GearEngine.Network.ActivityLuckBagProtocolHandler activityLuckBagProtocolHandler; // 0x3f8
    GearEngine.Network.StakeProtocolHandler stakeProtocolHandler; // 0x400
    GearEngine.Network.ActivityFestletterProtocolHandler activityFestletterProtocolHandler; // 0x408
    GearEngine.Network.ActivityRebateProtocolHandler activityRebateProtocolHandler; // 0x410
    GearEngine.Network.ActivityLuckytuProtocolHandler activityLuckytuProtocolHandler; // 0x418
    GearEngine.Network.ActivityFashionProtocolHandler activityFashionProtocolHandler; // 0x420
    GearEngine.Network.ActivityRebateRmbProtocolHandler activityRebateRmbProtocolHandler; // 0x428
    GearEngine.Network.ActivityQteProtocolHandler activityQteProtocolHandler; // 0x430
    GearEngine.Network.ActivityDiyGiftProtocolHandler activityDiyGiftProtocolHandler; // 0x438
    GearEngine.Network.DungeonNewStoryProtocolHandler dungeonNewStoryProtocolHandler; // 0x440
    GearEngine.Network.ActivityFlopProtocolHandler activityFlopProtocolHandler; // 0x448
    GearEngine.Network.NewRuneProtocolHandler newRuneProtocolHandler; // 0x450
    GearEngine.Network.BraveTeamProtocolHandler braveTeamProtocolHandler; // 0x458
    GearEngine.Network.GuildMapProtocolHandler guildMapProtocolHandler; // 0x460
    GearEngine.Network.CrossWorldBossProtocolHandler crossWorldBossProtocolHandler; // 0x468
    GearEngine.Network.DungeonDoubleResProtocolHandler dungeonDoubleResProtocolHandler; // 0x470
    GearEngine.Network.HeroCityProtocolHandler heroCityProtocolHandler; // 0x478
    GearEngine.Network.DungeonMagicProtocolHandler dungeonMagicProtocolHandler; // 0x480
    GearEngine.Network.DungeonStoryLineProtocolHandler dungeonStoryLineProtocolHandler; // 0x488
    GearEngine.Network.BravePlayerProtocolHandler bravePlayerProtocolHandler; // 0x490
    GearEngine.Network.ActivityCampwarProtocolHandler activityCampwarProtocolHandler; // 0x498
    GearEngine.Network.FirstRechargeProtocolHandler firstRechargeProtocolHandler; // 0x4a0
    GearEngine.Network.ActivityAnswerProtocolHandler activityAnswerProtocolHandler; // 0x4a8
    GearEngine.Network.ActivityTurntableProtocolHandler activityTurntableProtocolHandler; // 0x4b0
    GearEngine.Network.AbyssCataclysmProtocolHandler abyssCataclysmProtocolHandler; // 0x4b8
    GearEngine.Network.FashionPkProtocolHandler fashionPkProtocolHandler; // 0x4c0
    GearEngine.Network.ActivityFactoryProtocolHandler activityFactoryProtocolHandler; // 0x4c8
    GearEngine.Network.GuildGvgProtocolHandler guildGvgProtocolHandler; // 0x4d0
    GearEngine.Network.InnateProtocolHandler innateProtocolHandler; // 0x4d8
    System.Void .ctor(); // 0x02c68150
    System.Void HandlerInit(); // 0x02c68208
}
