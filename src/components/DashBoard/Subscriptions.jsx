import styles from "@/styles/Subscriptions.module.css";
import Image from "next/image";
import Loader from "../../components/Loader"

export default function Subscriptions(props){
    return (
        <div className={styles.SubscriptionsDataCard}>
            <h2>Subscriptions</h2>
            <div className={styles.addSub}>
                <button>*</button>
            </div>
            {
                props.loading ? <Loader /> : (props.subscriptions.length > 0 ? 
                <div className={styles.SubscriptionsDataCardBody}>
                    {
                        props.subscriptions.map((ele)=>{
                            return (
                                <div key={ele.id} className={styles.SubscriptionCardTile}>
                                    <div className={styles.SubscriptionCardTileHeader}>
                                        <Image fill={true} alt={ele.title} src={ele.logo.url} className={styles.subscriptionImg} />
                                        <p>$0.00</p>
                                    </div>
                                    <p>{ele.renewal} Renewal - {ele.plan} Plan</p>
                                    <p>{ele.description}</p>
                                </div>
                            );
                        })
                    }
                </div> : <div className={styles.noSubscriptions}>No Active Subscriptions</div>)
            }
        </div>
    );
}