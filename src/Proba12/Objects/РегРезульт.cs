﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Proba12
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Рег результ.
    /// </summary>
    // *** Start programmer edit section *** (РегРезульт CustomAttributes)

    // *** End programmer edit section *** (РегРезульт CustomAttributes)
    [AutoAltered()]
    [Caption("Рег результ")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РегРезультE", new string[] {
            "ДатРегРезСобес as \'Дат рег рез собес\'",
            "ПланирСобес as \'Планир собес\'",
            "ПланирСобес.ИметьПриСебе as \'Иметь при себе\'",
            "Организация as \'Организация\'",
            "Организация.Наименование as \'Наименование\'",
            "Сотрудники as \'Сотрудники\'",
            "Сотрудники.ФИОСотруд as \'Ф и о сотруд\'"}, Hidden=new string[] {
            "ПланирСобес.ИметьПриСебе",
            "Организация.Наименование",
            "Сотрудники.ФИОСотруд"})]
    [AssociatedDetailViewAttribute("РегРезультE", "ТЧРегРезульт", "ТЧРегРезультE", true, "", "Т ч рег результ", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("РегРезультE", "ПланирСобес", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ИметьПриСебе")]
    [MasterViewDefineAttribute("РегРезультE", "Организация", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [MasterViewDefineAttribute("РегРезультE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИОСотруд")]
    [View("РегРезультL", new string[] {
            "ДатРегРезСобес as \'Дат рег рез собес\'",
            "ПланирСобес.ИметьПриСебе as \'Иметь при себе\'",
            "Организация.Наименование as \'Наименование\'",
            "Сотрудники.ФИОСотруд as \'Ф и о сотруд\'"})]
    public class РегРезульт : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДатРегРезСобес;
        
        private IIS.Proba12.ПланирСобес fПланирСобес;
        
        private IIS.Proba12.Организация fОрганизация;
        
        private IIS.Proba12.Сотрудники fСотрудники;
        
        private IIS.Proba12.DetailArrayOfТЧРегРезульт fТЧРегРезульт;
        
        // *** Start programmer edit section *** (РегРезульт CustomMembers)

        // *** End programmer edit section *** (РегРезульт CustomMembers)

        
        /// <summary>
        /// ДатРегРезСобес.
        /// </summary>
        // *** Start programmer edit section *** (РегРезульт.ДатРегРезСобес CustomAttributes)

        // *** End programmer edit section *** (РегРезульт.ДатРегРезСобес CustomAttributes)
        public virtual System.DateTime ДатРегРезСобес
        {
            get
            {
                // *** Start programmer edit section *** (РегРезульт.ДатРегРезСобес Get start)

                // *** End programmer edit section *** (РегРезульт.ДатРегРезСобес Get start)
                System.DateTime result = this.fДатРегРезСобес;
                // *** Start programmer edit section *** (РегРезульт.ДатРегРезСобес Get end)

                // *** End programmer edit section *** (РегРезульт.ДатРегРезСобес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегРезульт.ДатРегРезСобес Set start)

                // *** End programmer edit section *** (РегРезульт.ДатРегРезСобес Set start)
                this.fДатРегРезСобес = value;
                // *** Start programmer edit section *** (РегРезульт.ДатРегРезСобес Set end)

                // *** End programmer edit section *** (РегРезульт.ДатРегРезСобес Set end)
            }
        }
        
        /// <summary>
        /// Рег результ.
        /// </summary>
        // *** Start programmer edit section *** (РегРезульт.Организация CustomAttributes)

        // *** End programmer edit section *** (РегРезульт.Организация CustomAttributes)
        [PropertyStorage(new string[] {
                "Организация"})]
        [NotNull()]
        public virtual IIS.Proba12.Организация Организация
        {
            get
            {
                // *** Start programmer edit section *** (РегРезульт.Организация Get start)

                // *** End programmer edit section *** (РегРезульт.Организация Get start)
                IIS.Proba12.Организация result = this.fОрганизация;
                // *** Start programmer edit section *** (РегРезульт.Организация Get end)

                // *** End programmer edit section *** (РегРезульт.Организация Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегРезульт.Организация Set start)

                // *** End programmer edit section *** (РегРезульт.Организация Set start)
                this.fОрганизация = value;
                // *** Start programmer edit section *** (РегРезульт.Организация Set end)

                // *** End programmer edit section *** (РегРезульт.Организация Set end)
            }
        }
        
        /// <summary>
        /// Рег результ.
        /// </summary>
        // *** Start programmer edit section *** (РегРезульт.ПланирСобес CustomAttributes)

        // *** End programmer edit section *** (РегРезульт.ПланирСобес CustomAttributes)
        [PropertyStorage(new string[] {
                "ПланирСобес"})]
        [NotNull()]
        public virtual IIS.Proba12.ПланирСобес ПланирСобес
        {
            get
            {
                // *** Start programmer edit section *** (РегРезульт.ПланирСобес Get start)

                // *** End programmer edit section *** (РегРезульт.ПланирСобес Get start)
                IIS.Proba12.ПланирСобес result = this.fПланирСобес;
                // *** Start programmer edit section *** (РегРезульт.ПланирСобес Get end)

                // *** End programmer edit section *** (РегРезульт.ПланирСобес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегРезульт.ПланирСобес Set start)

                // *** End programmer edit section *** (РегРезульт.ПланирСобес Set start)
                this.fПланирСобес = value;
                // *** Start programmer edit section *** (РегРезульт.ПланирСобес Set end)

                // *** End programmer edit section *** (РегРезульт.ПланирСобес Set end)
            }
        }
        
        /// <summary>
        /// Рег результ.
        /// </summary>
        // *** Start programmer edit section *** (РегРезульт.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (РегРезульт.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.Proba12.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (РегРезульт.Сотрудники Get start)

                // *** End programmer edit section *** (РегРезульт.Сотрудники Get start)
                IIS.Proba12.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (РегРезульт.Сотрудники Get end)

                // *** End programmer edit section *** (РегРезульт.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегРезульт.Сотрудники Set start)

                // *** End programmer edit section *** (РегРезульт.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (РегРезульт.Сотрудники Set end)

                // *** End programmer edit section *** (РегРезульт.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Рег результ.
        /// </summary>
        // *** Start programmer edit section *** (РегРезульт.ТЧРегРезульт CustomAttributes)

        // *** End programmer edit section *** (РегРезульт.ТЧРегРезульт CustomAttributes)
        public virtual IIS.Proba12.DetailArrayOfТЧРегРезульт ТЧРегРезульт
        {
            get
            {
                // *** Start programmer edit section *** (РегРезульт.ТЧРегРезульт Get start)

                // *** End programmer edit section *** (РегРезульт.ТЧРегРезульт Get start)
                if ((this.fТЧРегРезульт == null))
                {
                    this.fТЧРегРезульт = new IIS.Proba12.DetailArrayOfТЧРегРезульт(this);
                }
                IIS.Proba12.DetailArrayOfТЧРегРезульт result = this.fТЧРегРезульт;
                // *** Start programmer edit section *** (РегРезульт.ТЧРегРезульт Get end)

                // *** End programmer edit section *** (РегРезульт.ТЧРегРезульт Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегРезульт.ТЧРегРезульт Set start)

                // *** End programmer edit section *** (РегРезульт.ТЧРегРезульт Set start)
                this.fТЧРегРезульт = value;
                // *** Start programmer edit section *** (РегРезульт.ТЧРегРезульт Set end)

                // *** End programmer edit section *** (РегРезульт.ТЧРегРезульт Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РегРезультE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РегРезультE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РегРезультE", typeof(IIS.Proba12.РегРезульт));
                }
            }
            
            /// <summary>
            /// "РегРезультL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РегРезультL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РегРезультL", typeof(IIS.Proba12.РегРезульт));
                }
            }
        }
    }
}
